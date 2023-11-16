

package com.example.baithuchanh16112023;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;


import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class cart_activity extends Activity {

	

	View btnbackhome1;
	ImageView btnback2;
	@SuppressLint("MissingInflatedId")
	@Override
	public void onCreate(Bundle savedInstanceState) {

		super.onCreate(savedInstanceState);
		setContentView(R.layout.cart);
		btnbackhome1 = findViewById(R.id.btnbackhome2);
		btnbackhome1.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View view) {
				onBackPressed();
			}
		});
		btnback2 = findViewById(R.id.backhome12);
		btnback2.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View view) {
				onBackPressed();
			}
		});
	
	}
}
	
	