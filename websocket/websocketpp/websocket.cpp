#include <websocketpp/config/asio.hpp>

#include <websocketpp/server.hpp>

#include <iostream>

typedef websocketpp::server<websocketpp::config::asio_tls> server;
using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;

// pull out the type of messages sent by our config
typedef websocketpp::config::asio::message_type::ptr message_ptr;
typedef websocketpp::lib::shared_ptr<boost::asio::ssl::context> context_ptr;

void on_message(server* s, websocketpp::connection_hdl hdl, message_ptr msg) {
    std::cout << "on_message called with hdl: " << hdl.lock().get()
              << " and message: " << msg->get_payload()
              << std::endl;

    try {
        s->send(hdl, msg->get_payload(), msg->get_opcode());
    } catch (const websocketpp::lib::error_code& e) {
        std::cout << "Echo failed because: " << e
                  << "(" << e.message() << ")" << std::endl;
    }
}

std::string get_password() {
    return "mayingkui";
}

context_ptr on_tls_init(websocketpp::connection_hdl hdl) {
    std::cout << "on_tls_init called with hdl: " << hdl.lock().get() << std::endl;
    context_ptr ctx(new boost::asio::ssl::context(boost::asio::ssl::context::tlsv1));

    try {
        ctx->set_options(boost::asio::ssl::context::default_workarounds |
                         boost::asio::ssl::context::no_sslv2 |
                         boost::asio::ssl::context::single_dh_use);
        ctx->set_password_callback(bind(&get_password));
//        ctx->use_certificate_chain_file("mCameraWssPrivate.pem");
        ctx->use_private_key_file("mCameraWssPrivate.pem", boost::asio::ssl::context::pem);
    } catch (std::exception& e) {
        std::cout << __func__ << " " << e.what() << std::endl;
    }
    return ctx;
}

int main() {
    // Create a server endpoint
	server mCameraWSS;

    // Initialize ASIO
	mCameraWSS.init_asio();

    // Register our message handler
    mCameraWSS.set_message_handler(bind(&on_message,&mCameraWSS,::_1,::_2));
    mCameraWSS.set_tls_init_handler(bind(&on_tls_init,::_1));


	// Listen on port 9002
	mCameraWSS.listen(9002);

	// Start the server accept loop
	mCameraWSS.start_accept();

	// Start the ASIO io_service run loop
	mCameraWSS.run();

}
