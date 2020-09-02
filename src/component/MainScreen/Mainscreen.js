import React from 'react';


class MyComponent extends React.Component {
    constructor() {
     super();
 
     this.state = {
       filmData: null
     };
   }
 
   componentDidMount() {
     this.fetchMovie();
   }
 
   componentDidUpdate(prevProps) {
     if (prevProps.filmData !== this.props.filmData) {
       this.fetchMovie();
     }
   }
  
   fetchMovie() {
     const URL = "http://www.omdbapi.com/?t=" + 'Taxi' + "&apikey=6540f2ec&";
 
     fetch(URL).then(res => res.json()).then(json => {
       this.setState({ filmData: json });
     });
   }

 
   render() {
     const { filmData } = this.state;
      
     if (!filmData) return <div>Loading</div>;
   
     return(
       <>
      <div>{filmData.Title}</div>
      <img src={filmData.Poster}/>
      </>
     )
   }
 }

export default MyComponent;