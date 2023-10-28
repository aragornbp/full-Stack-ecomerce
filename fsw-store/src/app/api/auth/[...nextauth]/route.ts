import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { prismaClient } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
//precisa cadastrar cartão de crédito
//e criar um projeto no google developer console

//ir em api e serviços - clicar em credenciais,
//criar id do cliente OAuth, configurar tela de permissão
//tipo de app da web
