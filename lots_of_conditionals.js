function howMuchILoveYou(nbPetals) {
while( nbPetals > 6) {nbPetals -=6};
 if(nbPetals > 6) {nbPetals -=6}
  if (nbPetals % 6 === 0) { return "not at all"
    }else if (nbPetals % 5 === 0) { return 'madly'
    } else if (nbPetals % 4 === 0) { return 'passionately'
    } else if (nbPetals % 3 === 0) { return 'a lot'
    } else if (nbPetals % 2 === 0) {return 'a little'
    } else {return 'I love you'}
    
}
