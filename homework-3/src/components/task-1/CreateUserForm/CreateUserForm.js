import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { userValidator } from "../../validators/userValidator";
import { usersAxiosServise } from "../../services/usersAxiosService";

const CreateUserForm = ({setUsers}) => {
    
    const { reset, handleSubmit, register, formState: { isValid, errors } } = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });
    
    const save = async (user) => {
        const { data } = await usersAxiosServise.create(user);
        setUsers((prev) => [...prev, data])
        reset()
    };

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'}  {...register('name')} />
            <input type="text" placeholder={'user name'} {...register('username')} />
            <input type="text" placeholder={'web site'} {...register('website')} />
            <button disabled={!isValid} >Create user</button>
            </form>
            {errors.name && <div>{errors.name.message}</div>}
            {errors.username && <div>{errors.username.message}</div>} 
            {errors.website && <div>{errors.website.message }</div>} 
        </>    
    )
};

export { CreateUserForm };