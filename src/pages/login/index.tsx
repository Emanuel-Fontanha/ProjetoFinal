import { Link } from "react-router-dom";
import style from "./styles.module.css";
import { useForm } from "react-hook-form";
import { promise, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  password: z
    .string()
    .nonempty("Senha não pode ser vazia")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),

  usuarioEmail: z
    .string()
    .nonempty("O campo não pode ser vazio")
    .refine(
      (value) =>
        z.string().email().safeParse(value).success ||
        /^[A-Za-z0-9!@#$%^&*()_+=.-]+$/.test(value),
      {
        message:
          "Digite um e-mail válido ou um usuário sem espaço e sem acento",
      },
    ),
});

type User = z.infer<typeof userSchema>;
export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<User>({ resolver: zodResolver(userSchema) });

  async function createUser(data: User) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.loginRetangulo}>
        <h1>Login</h1>
        <p>
          Faça login para ter acesso aos pijamas dos seus{" "}
          <span>sonhos!</span>{" "}
        </p>

        <form
          action="#"
          className={style.loginForm}
          onSubmit={handleSubmit(createUser)}
        >
          <input
            type="text"
            placeholder=" Usuário ou E-mail"
            {...register("usuarioEmail")}
          />
          {errors.usuarioEmail && (
            <span className={style.spanInput}>
              {errors.usuarioEmail.message}
            </span>
          )}

          <div className={style.dentroForm}>
            <input
              type="password"
              placeholder=" Senha"
              {...register("password")}
            />
            {errors.password && (
              <span className={style.spanInput}>{errors.password.message}</span>
            )}

            <Link to="# " className={style.linkForm}>
              Esqueci a minha senha
            </Link>
          </div>

          <button className={style.buttonEntrar} disabled={isSubmitting}>
            ENTRAR
          </button>
        </form>
        <button className={style.buttonCadastrar}>CADASTRE-SE</button>
      </div>
    </div>
  );
}
