
import {useAuthContext} from '../context/AuthContext';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase';

export default function useCart() {
    const {uid} = useAuthContext();
    const queryClient = useQueryClient();
    const cartQuery = useQuery({queryKey:['carts'], queryFn: ()=> getCart(uid), enabled: !!uid});

    const addOrUpdateItem = useMutation({mutationFn: (product) => addOrUpdateToCart(uid, product),
    onSuccess: () => queryClient.invalidateQueries(['carts',uid])
    });

    const removeItem = useMutation({mutationFn: (id) => removeFromCart(uid,id),
        onSuccess: () => queryClient.invalidateQueries(['carts',uid])
        });
    return { cartQuery, addOrUpdateItem, removeItem };
}

