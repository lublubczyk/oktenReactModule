import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi";

import { commentsAxiosService } from "../../services/commentsAxiosService";
import { commentValidator } from "../../validators/commentValidator";

const CreateCommetnsForm = ({setComments}) => {
    
    const { reset, handleSubmit, register, formState: { isValid, errors } } = useForm({
        mode: 'all',
        resolver: joiResolver(commentValidator)
    });
    
    const save = async (comment) => {
        const { data } = await commentsAxiosService.create(comment);
        setComments((prev) => [...prev, data]);
        reset();
    };
    
    return (
        <>
            <form onSubmit={handleSubmit(save)}>
            <input type="number" placeholder="post id"{...register('postId')} />
            <input type="text" placeholder="name"{...register('name')} />
            <input type="text" placeholder="email"{...register('email')} />
            <input type="text" placeholder="body"{...register('body')} />
            <button disabled={!isValid}>Create comment</button>
            </form>
            {errors.postId && <div>{errors.postId.message}</div>}
            {errors.name && <div>{errors.name.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
            {errors.body && <div>{errors.body.message}</div>}
        </>
    )
};

export { CreateCommetnsForm };