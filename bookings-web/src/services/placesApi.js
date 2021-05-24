export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
      
    );
  } else {
    throw new Error(await response.json());
  }
};



export const getPlaceById = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/places/${id}`)
  const result = response.json();
  console.log('RESULT', result)
  
 
 return result;
  // return result.map(
 //   ({
  //    price_per_night,
 //     image_thumbnail,
 //     max_guests,
  //    pet_friendly,
  //    ...place
 //   }) => ({
  //    ...place,
   //   pricePerNight: price_per_night,
  //    imageThumbnail: image_thumbnail,
   //   maxGuests: max_guests,
   //   petFriendly: pet_friendly,
  //  })
    
//  );
}