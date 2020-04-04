const menu = {
    _courses : {
      appetizers : [], 
      mains : [], 
      desserts : []
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.desserts;
    },
    get desserts() {
      return this._courses.mains;
    },


    set appetizers(appetizerIn) {
      
    },
    
    set mains(appetizerIn) {
      
    },
   
    set desserts(appetizerIn) {
      
    },
    .addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
       
      };
  
      this._courses[courseName].push(dish);
    }
  }