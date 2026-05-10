"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types/product";

export function ProductCard({
  product,
  basePath,
  accentColor = "carbon-accent",
}: {
  product: Product;
  basePath: string;
  accentColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`${basePath}/${product.slug}`}
        className="group block h-full"
      >
        <div className="h-full bg-white border border-neutral-100 rounded-lg hover:border-neutral-200 overflow-hidden transition-colors cursor-pointer">
          <div className="relative h-52 bg-neutral-100 overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className={`text-sm font-medium text-neutral-900 group-hover:text-${accentColor} transition-colors`}>
              {product.name}
            </h3>
            <p className="mt-1.5 text-sm text-neutral-500 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.specs.slice(0, 2).map((spec) => (
                <span
                  key={spec.label}
                  className="text-xs px-2 py-0.5 bg-neutral-50 text-neutral-500 border border-neutral-100 rounded-full"
                >
                  {spec.label}: {spec.value}
                </span>
              ))}
            </div>
            <span className={`inline-flex items-center gap-1 mt-4 text-xs font-medium text-${accentColor}`}>
              View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
