// src/builder.ts

import SchemaBuilder from "@pothos/core";
//Imported the Date scalar type's resolver which handles converting values to the proper date type within your API
import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import { prisma } from "./db";
import type PrismaTypes from "@pothos/plugin-prisma/generated";

//Registered a new scalar type called "Date" using the SchemaBuilder's Scalars configuration and configured the JavaScript types to use when accessing and validating fields of this type
export const builder = new SchemaBuilder<{
    Scalars: {
      Date: { Input: Date; Output: Date };
    };
  
    PrismaTypes: PrismaTypes;
  }>({
    plugins: [PrismaPlugin],
    prisma: {

        client: prisma,
    
      },
  });

//Let the builder know how to handle the defined Date scalar type by providing the imported DateResolver
builder.addScalarType("Date", DateResolver, {});

builder.queryType({});
