const { validatePassword } = require('./passwordValidator');

describe('Validação de Senhas Seguras', () => {

  test('deve rejeitar senha com menos de 8 caracteres', () => {
    const r = validatePassword('Ab1!xyz');
    expect(r.valida).toBe(false);
    expect(r.erros).toContain('A senha deve ter no mínimo 8 caracteres');
  });


});