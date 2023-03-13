import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { CgFacebook } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';
import { TiSocialInstagram } from 'react-icons/ti';


import './App.css';
import { IconContext } from 'react-icons';

export default function App() {

	const styles = {
		container: {
			backgroundColor: "#2B3843",
		},
		top_header: {
			display: "flex",
			alignItems: "center",
			justifyContent: 'space-between',
			fontSize: 13,
			border: "1px solid red",
			width: "67%",
			margin: "auto"
		},
		bot_header: {

		},
	}

  return (
    <div style={styles.container}>
        <div style={styles.top_header}>
          <Trending />
					<Information />
        </div>
				<div style={styles.bot_header}>

				</div>
    </div>
  )
}

function Trending() {

	const styles = {
		container: {
			border: "1px solid blue",
			display: "flex",
			alignItems: "center",
		},
		title: {
			marginLeft: 12,
		},
		text: {
			color: "rgba(255,255,255,.6)",
			marginLeft: 5,
			fontSize: 14,
		},
	}

	return (
		<div style={styles.container}>
			<FiMenu size={24} color="whitesmoke" /> 
			<h4 style={styles.title}>TRENDING: </h4>
			<span style={styles.text}>Visual Guide to Herbs</span>
		</div>
	);
}

function Information() {
	const styles = {
		container: {
			display: 'flex',
			alignItems: 'center',
			border: '1px solid yellow'
		}
	}

	return (
		<div style={styles.container}>
			<SocialMedia icon={<CgFacebook size={20} color='whitesmoke'/>} />
			<SocialMedia icon={<IoLogoTwitter size={20} color='whitesmoke'/>} />
			<SocialMedia icon={<TiSocialInstagram size={20} color='whitesmoke'/>} />
			<Search />
			<ShoppingCart />
		</div>
	);
}

function SocialMedia({ icon }) {
	const styles = {
		container: {
			backgroundColor: 'rgba(255,255,255,.1)',
			borderRadius: 2,
			border: 'none',
			boxSizing: 'border-box',
			height: 32,
			width: 32,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
	}

	return (
		<button style={styles.container} onClick={() => console.log(icon.type)}>
				{icon}
		</button>
	);
}

function Search() {
	
	const styles = {
		container: {
			position: 'relative',
		},
		search: {
			backgroundColor: 'rgba(255,255,255,.1)',
			border: 'none',
			borderRadius: 2,
			boxSizing: 'border-box',
			height: 32,
			width: 120,
			padding: 8,
			paddingRight: 25,
			color: 'whitesmoke',
			fontWeight: 600,
		},
		icon: {
			transform: "scaleX(-1) translate(-50%, -50%)" ,
			position: 'absolute',
			top: '50%',
			right: 15,
		}
	}

	return (
		<div style={styles.container}>
			<input type="search" placeholder='Search' style={styles.search} />
			<BiSearch size={15} color='whitesmoke' style={styles.icon} />
		</div>
	);
}

function ShoppingCart() {
	const styles = {
		container: {
			backgroundColor: 'rgba(255,255,255,.1)',
			border: 'none',
			borderRadius: 2,
			boxSizing: 'border-box',
			height: 32,
			width: 100,
			padding: 8,
			color: 'whitesmoke'
		}
	}

	return (
		<button style={styles.container} onClick={() => console.log('pressed shopping cart')}>
				<TiSocialInstagram size={20} color='whitesmoke'/>
				<span>0 Items</span>
		</button>
	);
}