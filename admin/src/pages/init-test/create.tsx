import React from "react";
import { HttpError, BaseKey } from "@refinedev/core";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Box, TextField } from "@mui/material";

interface IInitTest {
    id: BaseKey;
    name: string;
}

interface FormValues {
    name?: string;
}

export const InitTestCreate = () => {
    const {
        saveButtonProps, // 保存ボタンに渡すprops
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInitTest, HttpError, FormValues>({
        refineCoreProps: {
            resource: "init_test", // apiのendpoint
            action: "create",
            redirect: "list",
        },
    });

    const onSubmit = (data: FormValues) => {
        onFinish(data);
    };

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    {...register("name", {
                        required: "This field is required",
                    })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Name"
                />
            </Box>
        </Create>
    );
};