import Image from "next/image";
import { FC } from "react";
import link from "next/link";
import Link from "next/link";

const LoginPage: FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Login Form Section */}
            <div className="p-8">
              <h2 className="text-center text-2xl font-bold mb-4">Iniciar Sesión</h2>
              <form>
                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-700"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-700"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="text-center mb-4">
                  <a href="#" className="text-gray-500 hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Link href="/dashboard">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Iniciar Sesión
                    </button>
                </Link>
              </form>
            </div>

            {/* Right Section */}
            <div className="relative bg-blue-700 text-white text-center flex flex-col justify-center items-center">
              <Image
                src="https://storage.googleapis.com/a1aa/image/IwENJ41mhD328ZtAhgQregNMrt3e_-0DaKDFIMMQ7iw.jpg"
                alt="Background image"
                layout="fill"
                objectFit="cover"
                className="opacity-50"
              />
              <div className="relative z-10 px-6">
                <h2 className="text-2xl font-bold">Bienvenido de nuevo</h2>
                <p className="mt-4 text-lg">
                  "El camino de la programación continúa aquí, en el Semillero
                  Digital. ¡Inicia sesión y sigue aprendiendo!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
