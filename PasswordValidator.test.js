const { validatePassword } = require('./passwordValidator');

describe('Validação de Senhas Seguras', () => {

  test('deve rejeitar senha com menos de 8 caracteres', () => {
    const r = validatePassword('Ab1!xyz');
    expect(r.valida).toBe(false);
    expect(r.erros).toContain('A senha deve ter no mínimo 8 caracteres');
  });

  test('deve rejeitar senha sem letra maiúscula', () => {
    const r = validatePassword('ab1!xyzw');
    expect(r.valida).toBe(false);
    expect(r.erros).toContain('A senha deve ter pelo menos uma letra maiúscula');
  });
 
  test('deve rejeitar senha sem letra minúscula', () => {
    const r = validatePassword('AB1!XYZW');
    expect(r.valida).toBe(false);
    expect(r.erros).toContain('A senha deve ter pelo menos uma letra minúscula');
  });

  test('deve rejeitar senha sem número', () => {
    const r = validatePassword('Abc!xyzw');
    expect(r.valida).toBe(false);
    expect(r.erros).toContain('A senha deve ter pelo menos um número');
  });
 
  test('deve rejeitar senha sem caractere especial', () => {
    const r = validatePassword('Abc1xyzw');
    expect(r.valida).toBe(false);
    expect(r.erros).toContain('A senha deve ter pelo menos um caractere especial (!@#$%^&*)');
  });

});