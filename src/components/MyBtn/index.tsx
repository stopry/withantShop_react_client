import React, { PureComponent } from 'react';

class MyBtn extends PureComponent{
	render(children){
		return(
			<button
				/*style={{transition:'opacity linear 300ms'}}*/
				onTouchStart={(e)=>{
					e.target.style.opacity = 0.8;
					
				}}
				onTouchEnd={(e)=>{
					e.target.style.opacity = 1;
				}}
				onTouchCancel={(e)=>{
					e.target.style.opacity = 1;
				}}
				className={this.props.className}

				onClick = {this.props.onClick}
			>
				{this.props.children}
			</button>
		)
	}
}

export default MyBtn;