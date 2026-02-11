'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="fixed inset-0 top-[60px] bg-white z-[999] flex flex-col p-10 gap-6 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-magnetia-black uppercase"
              onClick={onClose}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contacto"
            className="bg-magnetia-black text-white px-6 py-3 rounded-[10px] text-lg font-semibold text-center mt-4 uppercase"
            onClick={onClose}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: links.length * 0.08, duration: 0.3 }}
          >
            Hablemos
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
