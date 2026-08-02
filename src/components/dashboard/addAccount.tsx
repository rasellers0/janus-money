'use client'

import { styles } from "../../styles/styles";
import { useForm } from 'react-hook-form';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

type AddAccountCardProps = {
    onClick: () => void;
};

export default function AddAccountCard({ onClick }: AddAccountCardProps) {
    return (
        <button className={styles.button.default} onClick={onClick}>
            <h1 className="text-center">Add Account</h1>
        </button>
    );
}

function handleClick(){
    alert("button clicked!!!!");
}

interface FormValues {
    accountName: string;
    institution: string;
    notes: string;
}

interface Props {
    open: boolean;
    onClose: () => void;
}

export function AddAccountModal({open, onClose,}: Props) {
    const {register, handleSubmit, reset, formState: { errors, isSubmitting },} = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        console.log(data);

        reset();
        onClose();
    };

    const handleCancel = () => {
        reset();
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleCancel} className="relative z-10">
            <DialogBackdrop transition className={styles.modal.backdrop}/>
            <div className={styles.modal.container}>
                <div className={styles.modal.wrapper}>
                    <DialogPanel transition className={styles.modal.panel}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.modal.header}>
                                <DialogTitle className={styles.modal.title}>Add Financial Account</DialogTitle>
                            </div>
                            <div className={styles.modal.body}>
                                <div className={styles.form.group}>
                                    <label className={styles.form.label}>Account Name</label>
                                    <input {...register("accountName", {required: "Account name is required",})}
                                        className={styles.form.input}/>
                                    {errors.accountName && (
                                        <p className={styles.form.error}>{errors.accountName.message}</p>
                                    )}
                                </div>
                                <div className={styles.form.group}>
                                    <label className={styles.form.label}>Institution</label>
                                    <input{...register("institution")} className={styles.form.input} />
                                </div>
                                <div className={styles.form.group}>
                                    <label className={styles.form.label}>Notes</label>
                                    <input type="number" step="0.01" className={styles.form.input}
                                     {...register("notes", { valueAsNumber: false, })} 
                                    />
                                </div>
                            </div>
                            <div className={styles.modal.footer}>
                                <button type="button" onClick={handleCancel} className={styles.button.secondary}>
                                    Cancel
                                </button>
                                <button type="submit" disabled={isSubmitting} className={styles.button.primary}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
