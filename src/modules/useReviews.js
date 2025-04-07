import {ref} from 'vue'

export const useReviews = () => {
    let reviews = ref([
        {
            reviewAuthor: "Edgar N. Bones",
            reviewText: "The cofifn is fantastic, I love it!",
            reviewRating: 5,
            reviewDate: "2021-09-01"
        },
        {
            reviewAuthor: "Morticia A. Adams",
            reviewText: "The cofifn is fantastic, I love it!",
            reviewRating: 5,
            reviewDate: "2021-09-01"
        },
        {
            reviewAuthor: "Frank N. Stine",
            reviewText: "The cofifn is fantastic, I love it!",
            reviewRating: 5,
            reviewDate: "2021-09-01"
        },
        {
            reviewAuthor: "Ben Stiller",
            reviewText: "The cofifn is fantastic, I love it!",
            reviewRating: 5,
            reviewDate: "2021-09-01"
        },
        {
            reviewAuthor: "Jacky Chan",
            reviewText: "The cofifn is fantastic, I love it!",
            reviewRating: 5,
            reviewDate: "2021-09-01"
        },
        {
            reviewAuthor: "Zade Midows",
            reviewText: "The cofifn is fantastic, I love it!",
            reviewRating: 5,
            reviewDate: "2021-09-01"
        }
    ])

    return {
        reviews
    }
}