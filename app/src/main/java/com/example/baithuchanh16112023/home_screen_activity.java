
package com.example.baithuchanh16112023;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;


import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.baithuchanh16112023.R;
	public class home_screen_activity extends Activity {
		ImageView imagechuyenscan;
		ImageView imagebtn;
	@SuppressLint("MissingInflatedId")
	@Override
	public void onCreate(Bundle savedInstanceState) {

		super.onCreate(savedInstanceState);
		setContentView(R.layout.home_screen);
		imagechuyenscan = findViewById(R.id.chuyenscan);
		imagebtn = findViewById(R.id.btncart);
		imagechuyenscan.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View view) {
				startActivity(new Intent(home_screen_activity.this,scan_screen_activity.class));
			}
		});
		imagebtn.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View view) {
				startActivity(new Intent(home_screen_activity.this, cart_activity.class));
			}
		});

	
	}
}
	
	