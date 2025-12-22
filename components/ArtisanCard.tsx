import { Star, MapPin, CheckCircle, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArtisanProps {
  data: any; // Using any for brevity, use proper interface in prod
}

export default function ArtisanCard({ data }: ArtisanProps) {
  return (
    <Link href={`/artisan/${data.id}`} className="group block bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full bg-slate-100">
        <Image 
          src={data.image} 
          alt={data.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {data.company && (
          <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Building2 size={12} /> Agency
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-1">
              {data.name}
              {data.verified && <CheckCircle size={16} className="text-blue-500 fill-blue-100" />}
            </h3>
            <p className="text-slate-500 text-sm">{data.profession}</p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-slate-700">{data.rating}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500 border-t pt-4">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            {data.location}
          </div>
          <div className="ml-auto font-semibold text-slate-900">
            From {data.price}
          </div>
        </div>
      </div>
    </Link>
  );
}