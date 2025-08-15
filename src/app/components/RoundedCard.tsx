
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NewsCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export default function RoundedCard({ imageSrc, title, subtitle }: NewsCardProps) {
  return (
    <div className="p-3">
      {/* Circular Image */}
      <div className="text-center mb-3">
        <Image
          src={imageSrc}
          alt={title}
          width={150}
          height={150}
          className="rounded-circle"
        />
      </div>

      {/* Title */}
      <h5 className="fw-bold text-dark mb-3" style={{ lineHeight: '1.3' }}>
        {title}
      </h5>

      {/* Description */}
      <p className="text-muted small" style={{ lineHeight: '1.6' }}>
        {subtitle}
      </p>
    </div>
  );
}