import img1 from '../../assets/img/4.png'
import img2 from '../../assets/img/5.png'
import img3 from '../../assets/img/1.png'
import img4 from '../../assets/img/2.png'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const tabList = [
    {
        icon: <Icon name='star' size={24} color={'#fff'} />,
        isSelected: true,
        title: 'Popular'
    },
    {
        icon: <Icon name='bed' size={24} color={'#909090'} />,
        isSelected: false,
        title: 'Chair'
    },
    {
        icon: <Icon name='chair' size={24} color={'#909090'} />,
        isSelected: false,
        title: 'Table'
    },
    {
        icon: <Icon name='table-bar' size={24} color={'#909090'} />,
        isSelected: false,
        title: 'Armchair'
    },
    {
        icon: <Icon name='single-bed' size={24} color={'#909090'} />,
        isSelected: false,
        title: 'Bed'
    },
    {
        icon: <Icon name='star' size={24} color={'#909090'} />,
        isSelected: false,
        title: 'Popular'
    }
]

export const ProductList = [
    {
        img: img1,
        title: 'Julia 3 + 1',
        price: '1 690 €',
        isBookmarked: false
    },
    {
        img: img2,
        title: 'Ophélia',
        price: '310 €',
        isBookmarked: false
    },
    {
        img: img4,
        title: 'Baieba',
        price: '600 €',
        isBookmarked: false
    },
    {
        img: img3,
        title: 'Tressée',
        price: '160 €',
        isBookmarked: false
    },
    {
        img: img2,
        title: 'Baieba',
        price: '600 €',
        isBookmarked: false
    },
    {
        img: img1,
        title: 'Tressée',
        price: '160 €',
        isBookmarked: false
    },
    {
        img: img1,
        title: 'Ophélia',
        price: '310 €',
        isBookmarked: false
    },
    {
        img: img3,
        title: 'Baieba',
        price: '600 €',
        isBookmarked: false
    },
]