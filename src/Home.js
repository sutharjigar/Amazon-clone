import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/July/lifestyle/GATEWAY_PC._CB600538530_.jpg"
          alt="prime"
        />

        <div className="home__row">
          <Product
            id="12345676"
            title="iQOO Z7s 5G by vivo (Norway Blue, 6GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G 6nm Processor | 64 MP OIS Ultra Stable Camera | 44WFlashCharge"
            price={225.99}
            image="https://m.media-amazon.com/images/I/41bLD50sZSL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="3456721"
            title="Fastrack Two Timers Analog Black Dial Men's Watch-NN38042PP01/NP38042PP01"
            price={12}
            image="https://m.media-amazon.com/images/I/61W4+fsm-zL._UY741_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="30495438"
            title="HP Pavilion Gaming 11th Gen Intel Core i5 15.6'(39.6cm) FHD Gaming Laptop (8GB RAM/512GB SSD/RTX 3050 4GB Graphics/144 Hz/B&O/Windows 10 Home/MS Office/2.23Kg), 15-dk2012TX, Black"
            price={825}
            image="https://m.media-amazon.com/images/I/51DmOWr3rnL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="98764542"
            title="DOGLAPAN - ASHNEER GROVER - THE HARD TRUTH ABOUT LIFE"
            price={26}
            image="https://m.media-amazon.com/images/I/41YPPGwkOYL._SX313_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="32464342"
            title="Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant"
            price={388}
            image="https://m.media-amazon.com/images/I/71lG7br7k1L._SX522_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="43263165"
            title="Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV L32R8-FVIN (Black)"
            price={175}
            image="https://m.media-amazon.com/images/I/81I3nSMWDNL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}
export default Home
