package com.watorvapor.wvcamera;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;
import java.util.Collection;

import org.java_websocket.WebSocket;
import org.java_websocket.WebSocketImpl;
import org.java_websocket.framing.Framedata;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;


public class LocalNotifyWebSocket extends WebSocketServer {

	public LocalNotifyWebSocket() throws UnknownHostException {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public void onOpen(WebSocket conn, ClientHandshake handshake) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onClose(WebSocket conn, int code, String reason, boolean remote) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onMessage(WebSocket conn, String message) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onError(WebSocket conn, Exception ex) {
		// TODO Auto-generated method stub
		
	}

}
