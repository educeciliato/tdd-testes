const REGRAS = [
    { erro: 'A senha deve ter no mínimo 8 caracteres',                      validar: (s) => s.length >= 8          },
    { erro: 'A senha deve ter pelo menos uma letra maiúscula',              validar: (s) => /[A-Z]/.test(s)        },
    { erro: 'A senha deve ter pelo menos uma letra minúscula',              validar: (s) => /[a-z]/.test(s)        },
];


function validatePassword(senha) {
  if (senha == null) return { valida: false, erros: ['A senha é obrigatória'] };

  const erros = REGRAS.filter((r) => !r.validar(senha)).map((r) => r.erro);
  return { valida: erros.length === 0, erros };
}

module.exports = { validatePassword };