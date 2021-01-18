import React from 'react'
import './style.css'
import { SocialIcon } from 'react-social-icons'


const Footer = ({ address, phone, email}) => (
	<div className='footer'>
		<div className="title">
				Пекара Берег
		</div>
		<div className="divider"/>
		<div className="infoWrapper">
			<div className="adressInfo">
				<div className="infoColor">
						Адреса:
				</div> 
				{address} 
				<div className="infoColor">
						Телефон:
				</div>
				{phone}
			</div>
		</div>
		<div className="emailInfo">
				<div className="infoColor">
						Имејл:
				</div> {email}
		</div>
		<div className="socialWrapper">
			<div className="socialIcon">
					<SocialIcon network="twitter" bgColor="#ff6347"/> 
					<SocialIcon url="http://facebook.com/pekarabereg" bgColor="#ff6347"/>
					<SocialIcon url="http://instagram.com/jaketrent" bgColor="#ff6347"/>
					<SocialIcon url="http://tripadvisor.comjaketrent" bgColor="#ff6347"/>
			</div>
		</div>
		<div className="copyright">
			© ENCRYPTIT.com, Inc. All rights reserved.
		</div>
	</div>
)
export default Footer;
