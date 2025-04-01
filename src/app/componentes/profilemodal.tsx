import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para alternar la visibilidad del modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón de usuario */}
      <button
        onClick={toggleModal}
        className="shrink-0 focus:outline-none"
      >
        <Image
          className="size-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User profile"
        />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} // Estado inicial
            animate={{ opacity: 1 }} // Estado animado
            exit={{ opacity: 0 }} // Estado al salir
            transition={{ duration: 0.3 }} // Duración de la transición
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={toggleModal} // Cierra el modal al hacer clic fuera
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }} // Estado inicial
              animate={{ y: 0, opacity: 1 }} // Estado animado
              exit={{ y: -50, opacity: 0 }} // Estado al salir
              transition={{ duration: 0.3 }} // Duración de la transición
              className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md"
              onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
            >
              {/* Contenido del modal */}
              <div className="text-center">
                <Image
                  className="size-24 rounded-full mx-auto mb-4"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                />
                <h2 className="text-xl font-bold mb-2">Manuel Montas</h2>
                <p className="text-gray-600 mb-4">mmontasdelacruz@gmail.com</p>
                <button
                  onClick={toggleModal}
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileModal;