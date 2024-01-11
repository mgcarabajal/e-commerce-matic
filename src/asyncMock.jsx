const products = [
    {
        id:'1',
        name: 'CH for men',
        price: 12000,
        category: 'perfume',
        img:'https://http2.mlstatic.com/D_NQ_NP_976382-MLA45743621157_042021-O.webp',
        stock: 5,
        description: 'CH for men para hombres'
    },
    {
        id:'2',
        name: 'CK for women',
        price: 5000,
        category: 'perfume',
        img:'https://http2.mlstatic.com/D_NQ_NP_705523-MLA45825009061_052021-O.webp',
        stock: 2,
        description: 'CK for womens'
    },
    {
        id:'3',
        name: 'Black opium',
        price: 8000,
        category: 'perfume',
        img:'https://http2.mlstatic.com/D_NQ_NP_916357-MLU71572863958_092023-O.webp',
        stock: 4,
        description: 'black Opio'
    },
    {
        id:'4',
        name: 'Bombacha',
        price: 3100,
        category: 'lenceria',
        img:'https://http2.mlstatic.com/D_NQ_NP_796834-MLA47555844664_092021-O.webp',
        stock: 4,
        description: 'corpiño'
    },
]

    export const getProducts = () => {
        return new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(products)
            }, 500)

        })
    }

    export const getProductByID = (productID) => {
        return new Promise  ((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productID))
            }, 500)
        })
    }

    // esto le agregue yo

    export const getProductsByCategory = (category) => {
        return new Promise  ((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.category === category))
            }, 500)
        })
    }
    