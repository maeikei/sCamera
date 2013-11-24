/*
 * Copyright (c) 2012, Ma Yingkui. All rights reserved.
 *
 */

#ifndef WEBSOCKETPP_WATERVAPOR_SERVER_HANDLER_HPP
#define WEBSOCKETPP_WATERVAPOR_SERVER_HANDLER_HPP

class WatervaporWebSocketHandler : public server::handler {
	void onMessage(connection_ptr con, std::string msg) {
		con->write(msg);
	}
};

#endif // WEBSOCKETPP_WATERVAPOR_SERVER_HANDLER_HPP
