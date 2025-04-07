import {ref} from 'vue'

export const useProducts = () => {
    let coffinProducts = ref([
    {
        nameOfCoffins: "Coffin 1",
        price: 10000,
        description: "This is a coffin",
        tagLine: "This is a coffin supremeth!",
        productImage: "https://picsum.photos/200/300",
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
        nameOfCoffins: "Coffin 2",
        price: 15000,
        description: "This is a coffin2",
        tagLine: "This is a coffin supremeth 2!",
        productImage: "https://picsum.photos/200/300",
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
        nameOfCoffins: "Coffin 3",
        price: 20000,
        description: "This is a coffin3",
        tagLine: "This is a coffin supremeth 3!",
        productImage: "https://picsum.photos/200/300",
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

    return {
        coffinProducts
    }
}