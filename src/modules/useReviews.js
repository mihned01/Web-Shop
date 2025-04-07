import {ref} from 'vue'

export const useReviews = () => {
    let reviews= ref([
    {
        reviewAuthor:"Edgar N. Bones",
        reviewText:"This is a great product!",
        reviewRating:5,
        reviewDate:"2021-07-01"

    },
    {
        reviewAuthor:"John Doe",
        reviewText:"This is a great product!",
        reviewRating:4,
        reviewDate:"2020-12-30"
    },
    {
        reviewAuthor:"Frank N. Stein",
        reviewText:"TPerfect for the occasion!",
        reviewRating:5,
        reviewDate:"2011-07-01"
    },
    {
        reviewAuthor:"Lenore P. Raven",
        reviewText:"This is a great product!",
        reviewRating:3,
        reviewDate:"2019-08-10"
    },
    {
        reviewAuthor:"Collin Martin",
        reviewText:"This is a great product!",
        reviewRating:4,
        reviewDate:"2016-07-17"

    },
    {
        reviewAuthor:"Marie Stewart",
        reviewText:"I will always shop here!",
        reviewRating:5,
        reviewDate:"2022-03-25"

    }  

    ])
    return {reviews}
}