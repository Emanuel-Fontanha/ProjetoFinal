import z from "zod"
import styles from "./styles.module.css"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"


const accountSchema = z.object({
    name: z
        .string()
        .nonempty("Não deixe seu nome em branco!")
        .trim()
        .regex(/^[^0-9\s]+(?:\s[^0-9\s]+)*$/, "Não use apenas espaços ou números."),

    username: z
        .string()
        .min(1, "O nome de usuário é obrigatório!")
        .regex(/^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*$/, "Não use espaços ou acentos."),

    email: z.email("Digite um email válido!"),

    password: z
        .string()
        .min(6, "A senha deve conter pelo menos 6 caracteres!")
        .regex(/^[^\s]+$/, "A senha não pode conter espaços."),

    confirmPassword: z
        .string()
        .min(1, "A confirmação de senha é obrigatória"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas precisam ser iguais",
        path: ["confirmPassword"],
})

type Account = z.infer<typeof accountSchema>


export default function Registro() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<Account>({
        resolver: zodResolver(accountSchema)
    })

    async function registerTimeout() {
        await new Promise(resolve => setTimeout(resolve, 1500))
        reset()
        await new Promise(resolve => setTimeout(resolve, 500))
        navigate("/")
    }

    return (
        <div className={styles.registerContainer}>
            <section className={styles.mainRegisterDiv}>
                <p className={styles.registerTitle}>Registre-se</p>
                <form
                    onSubmit={handleSubmit(registerTimeout)}
                    className={styles.formDiv}>

                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputTag}
                            id="nameInput"
                            type="text"
                            placeholder="Nome"
                            {...register("name")}/>
                        {errors.name &&
                                <span
                                    className={styles.errors}>
                                    {`• ${errors.name.message}`}</span>
                        }
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputTag}
                            id="usernameInput"
                            type="text"
                            placeholder="Nome de Usuário"
                            {...register("username")}/>
                        {errors.username &&
                                <span
                                    className={styles.errors}>
                                    {`• ${errors.username.message}`}</span>
                        }
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputTag}
                            id="emailInput"
                            type="email"
                            placeholder="E-mail"
                            {...register("email")}/>
                        {errors.email &&
                                <span
                                    className={styles.errors}>
                                    {`• ${errors.email.message}`}</span>
                        }
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputTag}
                            id="passwordInput"
                            type="password"
                            placeholder="Senha"
                            {...register("password")}/>
                        {errors.password &&
                                <span
                                    className={styles.errors}>
                                    {`• ${errors.password.message}`}</span>
                        }
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputTag}
                            id="confirmPasswordInput"
                            type="password"
                            placeholder="Confirmar senha"
                            {...register("confirmPassword")}/>
                        {errors.confirmPassword &&
                                <span
                                    className={styles.errors}>
                                    {`• ${errors.confirmPassword.message}`}</span>
                        }
                    </div>

                    <button
                        id={styles.registerButton}
                        className={isSubmitting ? styles.loadingRegisterButton : ""}
                        disabled={isSubmitting}>
                        {isSubmitting ? "AGUARDE..." : "REGISTRAR"}</button>
                </form>
            </section>
        </div>
    )
}