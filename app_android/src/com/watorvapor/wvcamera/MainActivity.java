package com.watorvapor.wvcamera;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		WebView  mainView = (WebView)findViewById(R.id.MainWebView);
		mainView.getSettings().setJavaScriptEnabled(true);
		mainView.loadUrl("http://192.168.0.150/wvCamera/main_activity.html");
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
