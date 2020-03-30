// El número de amigos imaginarios de una persona es siempre el 33% del total de sus amigos

const numImaginaryFriends = totalFriends => {
    return Math.round(totalFriends * .33)
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(numImaginaryFriends(18)) // Should print 6