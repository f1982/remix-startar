import type { User, Keyboard } from "@prisma/client";
import { prisma } from "~/db.server";
export type { Keyboard } from "@prisma/client";

export function getKeyboard({
  id,
  userId,
}: Pick<Keyboard, "id"> & {
  userId: User["id"];
}) {
  return prisma.keyboard.findFirst({
    select: { id: true, description: true, name: true },
    where: { id, userId },
  });
}

export function getKeyboardListItems({ userId }: { userId: User["id"] }) {
  return prisma.keyboard.findMany({
    where: { userId },
    select: { id: true, name: true },
    orderBy: { updateAt: "desc" },
  });
}

export function createKeyboard({
  description,
  name,
  userId,
}: Pick<Keyboard, "description" | "name"> & {
  userId: User["id"];
}) {
  return prisma.keyboard.create({
    data: {
      name,
      description,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteKeyboard({
  id,
  userId,
}: Pick<Keyboard, "id"> & { userId: User["id"] }) {
  return prisma.keyboard.deleteMany({
    where: { id, userId },
  });
}
