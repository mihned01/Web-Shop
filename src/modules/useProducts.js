import {ref} from 'vue'

export const useProducts = () => {
    let coffinProducts= ref([
        {
            id:1,
            nameOfCoffins: "Coffin 1",
            price: 10000,
            description: "This is a coffin",
            tagLine: "This is a coffin supremeth!",
            productImage: "https://picsum.photos/800/1200",
            productSpecifications: {
                sustainable: "100% sustainable, more text",
                treeOfLife: true,
                sustainableMaterials: "100% sustainable materials",
            },
            productChoices: ["oak", "mahogany", "pine", "bonsai", "Willow"],
            productSize: {
                width: 200,
                length: 300,
                depth: 100,
            }
        },
        {
            id:2,
            nameOfCoffins: "Coffin 2",
            price: 41533,
            description: "This is a coffin 2",
            tagLine: "This is a coffin supremeth 2!",
            productImage: "https://picsum.photos/800/1200",
            productSpecifications: {
                sustainable: "100% sustainable, more text",
                treeOfLife: true,
                sustainableMaterials: "100% sustainable materials",
            },
            productChoices: ["oak", "mahogany", "pine", "bonsai", "Willow"],
            productSize: {
                width: 200,
                length: 300,
                depth: 100,
            }
        },
        {
            id:3,
            nameOfCoffins: "Coffin 3",
            price: 10000,
            description: "This is a coffin",
            tagLine: "This is a coffin supremeth!",
            productImage: "https://picsum.photos/800/1200",
            productSpecifications: {
                sustainable: "100% sustainable, more text",
                treeOfLife: true,
                sustainableMaterials: "100% sustainable materials",
            },
            productChoices: ["oak", "mahogany", "pine", "bonsai", "Willow"],
            productSize: {
                width: 200,
                length: 300,
                depth: 100,
            }
        },
    ])
    return {coffinProducts}
}
