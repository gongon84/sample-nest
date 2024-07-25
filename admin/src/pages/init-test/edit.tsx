import React from "react";
import { useForm, HttpError, BaseKey } from "@refinedev/core";

export const InitTestEdit: React.FC = () => {
    const { queryResult, formLoading, onFinish } = useForm<IInitTest, HttpError, FormValues>({
        resource: "init_test",
        action: "edit",
        redirect: "list",
    });

    const defaultValues = queryResult?.data?.data;

    const [values, setValues] = React.useState<FormValues>({
        id: defaultValues?.id || "",
        name: defaultValues?.name || "",
    });

    React.useEffect(() => {
        setValues({
            id: defaultValues?.id || "",
            name: defaultValues?.name || "",
        });
    }, [defaultValues]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFinish(values);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="id">ID</label>
            <input
                name="id"
                placeholder="ID"
                value={values.id}
                onChange={(e) => setValues({ ...values, id: e.target.value })}
            />
            <label htmlFor="name">Name</label>
            <input
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <button type="submit" disabled={formLoading}>
                {formLoading ? "Loading..." : "Submit"}
            </button>
        </form>
    );
};

interface IInitTest {
    id: BaseKey;
    name: string;
}

interface FormValues {
    id?: string | number | undefined;
    name?: string;
}