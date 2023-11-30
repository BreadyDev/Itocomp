import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <div id="main-ar" className="rounded-xl my-[5%] mx-[25%]">

          <div>

          </div>

          <div class="m-[2%]">

            <div class="flex justify-center my-[7%]">
              <div class="w-[90%]">
                Usuario o correo eléctronico
                <input type="text" placeholder="Correo" class="input input-bordered border-secondary w-[100%] form-control  rounded-xl" />
              </div>
            </div>

            <div class="flex justify-center mb-[7%]">
              <div class="w-[90%]">
                Contraseña
                <input type="password" placeholder="*************" class="input input-bordered border-secondary w-[100%] form-control  rounded-xl" />
              </div>
            </div>
            
          </div>

          <div>

            <div className="flex justify-center mx-[30%] mb-[3%]">
              <button class="btn btn-accent w-[100%]">
                Iniciar Sesión
              </button>
            </div>

            <div className="flex justify-center mx-[30%] mb-[7%]">
              <Link href="/" role="button" class="btn btn-accent w-[100%]">
                Regresar
              </Link>
            </div>
          </div>

        </div>

    </main>
  )}