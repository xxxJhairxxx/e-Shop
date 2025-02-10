/** @format */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
	const products = [
		{
			title: 'Smartphone',
			price: 699.99,
			description:
				'Latest model smartphone with high-resolution camera whith anti UV ideal for work in jungle and cities.',
			category: 'electronics',
			image:
				'https://hiraoka.com.pe/media/catalog/product/h/o/honor-x5b-4gb_128gb-starry-purple_0.jpg',
			rating: { create: { rate: 4.5, count: 230 } },
		},
		{
			title: 'Laptop',
			price: 1299.99,
			description:
				'Powerful laptop for work and gaming for play left 4 dead and others games.',
			category: 'electronics',
			image: 'https://hiraoka.com.pe/media/catalog/product/1/3/131721_3_1.jpg',
			rating: { create: { rate: 4.7, count: 150 } },
		},
		{
			title: 'Wireless Headphones',
			price: 199.99,
			description:
				'Noise-canceling headphones for immersive audio experiences.',
			category: 'electronics',
			image:
				'https://hiraoka.com.pe/media/catalog/product/6/1/61862_jlab_audifono_jbuddies_studio_gris_001.jpg',
			rating: { create: { rate: 4.3, count: 90 } },
		},
		{
			title: 'Smartwatch',
			price: 299.99,
			description: 'Advanced smartwatch with fitness tracking features.',
			category: 'electronics',
			image:
				'https://hiraoka.com.pe/media/catalog/product/h/u/huawei_watch_gt_5_pro_46_mm_black_1.jpg',
			rating: { create: { rate: 4.6, count: 80 } },
		},
		{
			title: '4K TV',
			price: 599.99,
			description:
				'High-definition 55-inch 4K Smart TV for the ultimate home entertainment.',
			category: 'electronics',
			image: 'https://hiraoka.com.pe/media/catalog/product/1/3/130880_0.jpg',
			rating: { create: { rate: 4.8, count: 190 } },
		},
		{
			title: 'Bluetooth Speaker',
			price: 89.99,
			description: 'Portable speaker with deep bass and long battery life.',
			category: 'electronics',
			image: 'https://hiraoka.com.pe/media/catalog/product/1/3/130277_1.jpg',
			rating: { create: { rate: 4.2, count: 120 } },
		},
		{
			title: 'T-shirt',
			price: 19.99,
			description:
				'Comfortable cotton t-shirt for run in the morning and at night.',
			category: "clothes",
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/129926906_01/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.1, count: 75 } },
		},
		{
			title: 'Jeans',
			price: 49.99,
			description: 'Classic blue jeans for appointments and dancing in discos.',
			category: "clothes",
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20607327_1/w=1004,h=1500,fit=cover',
			rating: { create: { rate: 4.5, count: 100 } },
		},
		{
			title: 'Jacket',
			price: 89.99,
			description: 'Warm and stylish winter jacket for cold weather.',
			category: "clothes",
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/133169186_01/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.7, count: 85 } },
		},
		{
			title: 'Running Shoes',
			price: 79.99,
			description:
				'Lightweight and comfortable running shoes for outdoor workouts.',
			category: "clothes",
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/132691065_01/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.4, count: 70 } },
		},
		{
			title: 'Novel',
			price: 14.99,
			description:
				'Bestselling fiction novel for readers and public in general.',
			category: 'books',
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/126774855_01/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.8, count: 150 } },
		},
		{
			title: 'Cookbook',
			price: 24.99,
			description:
				'Collection of gourmet recipes of rice with chicken, ceviche, and more.',
			category: 'books',
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/130685943_01/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.6, count: 60 } },
		},
		{
			title: "The Can't Sleep Book",
			price: 19.99,
			description: 'Soothe away insomnia with relaxing coloring activities.',
			category: 'books',
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/123321731_01/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.7, count: 70 } },
		},
		{
			title: 'Science Fiction',
			price: 17.99,
			description:
				'Thrilling science fiction novel with captivating plot twists.',
			category: 'books',
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/114127395_01/w=800,h=800,fit=pad',
			rating: { create: { rate: 4.9, count: 180 } },
		},
		{
			title: 'History Book',
			price: 29.99,
			description:
				'Comprehensive guide to world history and ancient civilizations.',
			category: 'books',
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/17460460_1/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.8, count: 200 } },
		},
		{
			title: 'Poetry Collection',
			price: 12.99,
			description:
				'Beautiful collection of poems that explore emotions and nature.',
			category: 'books',
			image:
				'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20197115_1/w=1500,h=1500,fit=pad',
			rating: { create: { rate: 4.6, count: 75 } },
		},
	];

	for (const product of products) {
		await prisma.product.create({
			data: product,
		});
	}

	console.log('Seed data inserted successfully');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
