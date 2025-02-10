/** @format */

import type { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProducts = asyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		const products = await prisma.product.findMany({
			include: { rating: true },
		});

		const formattedProducts = products.map((product) => ({
			...product,
			rating: product.rating
				? {
						rate: product.rating.rate,
						count: product.rating.count,
				  }
				: null,
		}));

		res.json(formattedProducts);
	}
);

export const getProductById = asyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;
		const product = await prisma.product.findUnique({
			where: { id: Number.parseInt(id) },
			include: { rating: true },
		});

		if (product) {
			const formattedProduct = {
				...product,
				rating: product.rating
					? {
							rate: product.rating.rate,
							count: product.rating.count,
					  }
					: null,
			};
			res.json(formattedProduct);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	}
);

