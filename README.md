# Password Validator — TDD com JavaScript

Sistema de validação de senhas seguras desenvolvido com **Test-Driven Development (TDD)**, usando JavaScript e Jest.

---

## Regras de Validação

| # | Regra |
|---|-------|
| 1 | Mínimo de 8 caracteres |
| 2 | Pelo menos uma letra maiúscula |
| 3 | Pelo menos uma letra minúscula |
| 4 | Pelo menos um número |
| 5 | Pelo menos um caractere especial (`!@#$%^&*`) |
| 6 | Sem espaços em branco |

---

## Como executar

```bash
# Instalar dependências
npm install

# Rodar os testes
npm test
```

---

## Estrutura do Projeto

```
tdd-testes/
├── passwordValidator.js       # Implementação
├── passwordValidator.test.js  # Testes
├── package.json
└── README.md
```

---

## Ciclo TDD Aplicado

O desenvolvimento seguiu o ciclo **Red → Green → Refactor** para cada regra:

**Red** — O teste é escrito antes da implementação e roda falhando:
```js
test('deve rejeitar senha com menos de 8 caracteres', () => {
  const r = validatePassword('Ab1!xyz');
  expect(r.valida).toBe(false);
});
```

**Green** — É implementado o código mínimo para o teste passar:
```js
function validatePassword(senha) {
  const erros = [];
  if (senha.length < 8) erros.push('A senha deve ter no mínimo 8 caracteres');
  return { valida: erros.length === 0, erros };
}
```

**Refactor** — Após todos os testes passarem, o código foi refatorado para um array declarativo de regras, sem alterar nenhum comportamento:
```js
const REGRAS = [
  { erro: 'A senha deve ter no mínimo 8 caracteres', validar: (s) => s.length >= 8 },
  // ...
];
```

---

## Reflexão sobre TDD

A maior dificuldade foi resistir à tentação de implementar tudo antes de escrever os testes. O ciclo Red exige disciplina, ver o teste falhar antes de implementar é parte essencial do processo.

O benefício mais claro apareceu no Refactor: ao trocar a estrutura de `if` encadeados pelo array declarativo, os 9 testes garantiram que nenhuma regra foi quebrada durante a mudança.

---

## Resultado Final

```
PASS src/passwordValidator.test.js
  ✓ deve rejeitar senha com menos de 8 caracteres
  ✓ deve rejeitar senha sem letra maiúscula
  ✓ deve rejeitar senha sem letra minúscula
  ✓ deve rejeitar senha sem número
  ✓ deve rejeitar senha sem caractere especial
  ✓ deve rejeitar senha com espaço em branco
  ✓ deve rejeitar senha nula ou undefined
  ✓ deve retornar múltiplos erros para senha muito inválida
  ✓ deve aceitar senha válida e retornar erros vazio

Tests: 9 passed, 9 total
```
