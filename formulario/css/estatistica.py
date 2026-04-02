# Trabalho de Estatística com Interface Gráfica
# Nome: Vinicius Eduardo Ferreira da Silva

import tkinter as tk
from tkinter import messagebox

# =========================
# FUNÇÕES DE CÁLCULO
# =========================

def calcular_media(lista):
    return sum(lista) / len(lista)

def calcular_mediana(lista):
    lista_ordenada = sorted(lista)
    n = len(lista_ordenada)
    meio = n // 2

    if n % 2 == 0:
        return (lista_ordenada[meio - 1] + lista_ordenada[meio]) / 2
    else:
        return lista_ordenada[meio]

def calcular_moda(lista):
    contagem = {}

    for num in lista:
        contagem[num] = contagem.get(num, 0) + 1

    maior = max(contagem.values())

    if maior == 1:
        return None

    modas = [num for num, freq in contagem.items() if freq == maior]
    return modas


# =========================
# FUNÇÃO DO BOTÃO
# =========================

def calcular():
    entrada = campo_entrada.get()

    try:
        numeros = list(map(float, entrada.split()))

        if len(numeros) < 5:
            messagebox.showerror("Erro", "Digite pelo menos 5 números!")
            return

        ordenados = sorted(numeros)

        media = calcular_media(numeros)
        mediana = calcular_mediana(numeros)
        moda = calcular_moda(numeros)

        resultado = f"Dados: {numeros}\n"
        resultado += f"Ordenados: {ordenados}\n\n"
        resultado += f"Média: {media:.2f}\n"
        resultado += f"Mediana: {mediana:.2f}\n"

        if moda is None:
            resultado += "Moda: não existe"
        else:
            resultado += f"Moda: {moda}"

        label_resultado.config(text=resultado)

    except:
        messagebox.showerror("Erro", "Digite apenas números válidos!")


# =========================
# INTERFACE
# =========================

janela = tk.Tk()
janela.title("Sistema de Estatística")
janela.geometry("400x350")

titulo = tk.Label(janela, text="Sistema de Estatística", font=("Arial", 14))
titulo.pack(pady=10)

instrucao = tk.Label(janela, text="Digite números separados por espaço:")
instrucao.pack()

campo_entrada = tk.Entry(janela, width=40)
campo_entrada.pack(pady=5)

botao = tk.Button(janela, text="Calcular", command=calcular)
botao.pack(pady=10)

label_resultado = tk.Label(janela, text="", justify="left")
label_resultado.pack(pady=10)

janela.mainloop()