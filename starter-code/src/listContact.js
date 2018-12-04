import React, { Component } from 'react';

import Contacts from './contacts.json'



class MovieStars extends Component{


    state = {
        stars : Contacts,
        style : { height: "4vw", textAlign: "center"},
        theNumber: 5,
        listedStars : Contacts.slice(0,5)
    }

    sortByName(){


        let copyArray = [...this.state.listedStars]

        copyArray.sort((firstObj, secondObj) =>{
            return firstObj.name < secondObj.name ? -1 : 1
        })

        this.setState({listedStars : copyArray  })
    }


    sortBypopularity(){


        let copyArray = [...this.state.listedStars]

        copyArray.sort((firstObj, secondObj) =>{
            return firstObj.popularity < secondObj.popularity ? 1 : -1
        })

        this.setState({listedStars : copyArray  })
    }



    addStar(){
        
        let randomStar = this.state.stars[Math.floor(Math.random()*this.state.stars.length)]
        if(!this.state.listedStars.includes(randomStar)){


         

            
            this.setState({
                listedStars: [...this.state.listedStars, randomStar]
            })
            // this.state.listedStars.push(randomStar)

        }

      
    }

    render(){

        
            return (    
                
                <div>
                <h1>IronContacts</h1>
                <button onClick = {() =>{ this.addStar() }}>Add random start</button>
                <button onClick = {() =>{   this.sortByName()       }} >Sort by name</button>
                <button onClick = {() => {   this.sortBypopularity()   }}>Sort by popularity</button>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                
                {this.state.listedStars.map((eachStar,Index) =>{
                        
                        return (
                            
                             <tr key = {Index}>
                                <th><img src={eachStar.pictureUrl} style = {this.state.style}  alt=""/></th>
                                <th>{eachStar.name}</th>
                                <th>{eachStar.popularity.toFixed(3)}</th>

                            </tr>
                          
                        )

                   

                        })}

                </table>
                </div>
                    )
         
              
         
    
        // this.setState({
        //     listedStars : [...listStars]
            
        // })


        // return(



        //     <div style =  { {  textAlign: this.state.style.textAlign    }  } >
        //         <h1>IronContacts</h1>
        //         <button onClick={() => this.addStar()}> Add random star</button>
        //         <table>
        //             <tr>
        //                 <th>Picture</th>
        //                 <th>Name</th>
        //                 <th>Popularity</th>
        //             </tr>
        //             {listStars}
        //         </table>
             
        //     </div>


        // )
    }

}


export default  MovieStars;

