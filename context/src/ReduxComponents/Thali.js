import React from 'react'
import Show from './Show'
const style={
    inner:{
      marginRight:"50px"
    }
  }
function Thali() {
    return (
        <div>
              <img className='thali__banner' src="https://img.freepik.com/premium-photo/navratri-upwas-thali-fasting-food-platter-selective-focus_466689-70627.jpg?w=2000"/>
        <div className='thali'>
          
            <div className="thali__row">
                <Show
                    id="12321341"
                    title="Chapati"
                    price={100}
                    quantity={1}
                    image="https://spicecravings.com/wp-content/uploads/2020/12/Roti-Featured-1-500x375.jpg"
                    

                />
               
               <Show
                    id="4903850"
                    title="Curd"
                    price={94}
                    quantity={1}
                    image="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/09/Pictures/_90b9dbd2-45c0-11e6-b0f4-7520104944f6.tif"

                />
            </div>
            <div className="thali__row">
               
                  
                 <Show
                    id="23992239"
                    title="Paneer Dish"
                    price={200}
                    quantity={1}
                    image="https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg"
                />
                <Show
                    id="23445930"
                    title="Sweet"
                    price={100}
                    quantity={1}
                    image="https://wellnessmunch.com/wp-content/uploads/2019/03/indian-sweet-371357_640.jpg"

                />
            </div>
            <div className="thali__row" style={style.inner}>
          
                 <Show
                    id="23883939"
                    title="Daal"
                    price={150}
                    quantity={1}
                    image="https://www.playfulcooking.com/wp-content/uploads/2021/06/Aam-daal-01-720x405.jpg"
                />
                <Show
                    id="49538094"
                    title="Pickle"
                    price={90}
                    quantity={1}
                    image="https://i.ndtvimg.com/i/2017-02/pickle-620x350_620x350_51487758433.jpg"
                />
               
            </div>
        </div>
        </div>
    )
}

export default Thali