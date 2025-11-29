// @ts-check
import { test, expect } from '@playwright/test';

const caminho = "C:/Users/Admin/Desktop/formCadastro/index.html";

test("carregamento inicial", async ({ page }) => {
  await page.goto('file:///' + caminho);
  await expect(page).toHaveTitle("Cadastro de Usuários");
  await expect(page.locator('#user-form')).toBeVisible();
  await expect(page.locator('.container')).toBeVisible();
  await expect(page.locator('#submit-button')).toBeVisible();
  await expect(page.locator('#clear-list')).toBeVisible();
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();



});

test("validacao do formulario", async ({ page }) => {
  await page.goto('file:///' + caminho);
  await page.getByRole('button', { name: 'Enviar' }).click();
  await expect(page.getByText('Por favor, preencha todos os campos.')).toBeVisible();



});
test("cadastro bem-sucedido", async ({ page }) => {
  await page.goto('file:///' + caminho);
  await page.fill('#name', 'Daniel Calebe');
  await page.fill('#email', 'danielcalebe@gmail.com');
  await page.fill('#password', '123456');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await expect(page.getByText('Daniel Calebe')).toBeVisible();

});
test("evitar cadastros duplicados", async ({ page }) => {
  await page.goto('file:///' + caminho);

  let alertFoiChamado = false;
  let mensagemAlert = '';

  page.on('dialog', async dialog => {
    alertFoiChamado = true;
    mensagemAlert = dialog.message();

    await dialog.accept();
  });

  await page.fill('#name', 'Daniel Calebe');
  await page.fill('#email', 'danielcalebe@gmail.com');
  await page.fill('#password', '123456');
  await page.getByRole('button', { name: 'Enviar' }).click();

  await page.fill('#name', 'Daniel Calebe');
  await page.fill('#email', 'danielcalebe@gmail.com');
  await page.fill('#password', '123456');
  await page.getByRole('button', { name: 'Enviar' }).click();


  expect(alertFoiChamado).toBeTruthy();
  expect(mensagemAlert).toBe('Usuário já cadastrado!');

});

test("limpar lista de usuarios", async ({ page }) => {
  await page.goto('file:///' + caminho);
  await page.fill('#name', 'Daniel Calebe');
  await page.fill('#email', 'danielcalebe@gmail.com');
  await page.fill('#password', '123456');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await expect(page.getByText('Daniel Calebe')).toBeVisible();

  await page.getByRole('button', { name: 'Limpar Cadastros' }).click();
  await expect(page.getByText('Daniel Calebe')).toBeHidden();

});
