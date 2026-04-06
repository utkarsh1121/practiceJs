function first() {
    console.log("First");
  
    setTimeout(() => {
      console.log("Timeout");
    }, 0);
  
    second();
  }
  
  function second() {
    console.log("Second");
  }
  
  first(); 