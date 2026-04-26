function ResponsiveImage({ picture, alt, className, sizes, loading, ...rest }) {
  const sources = picture.sources ?? {};
  const fallback = picture.img ?? {};

  return (
    <picture>
      {sources.avif && <source type="image/avif" srcSet={sources.avif} sizes={sizes} />}
      {sources.webp && <source type="image/webp" srcSet={sources.webp} sizes={sizes} />}
      {sources.jpg && <source type="image/jpeg" srcSet={sources.jpg} sizes={sizes} />}
      <img
        src={fallback.src}
        width={fallback.w}
        height={fallback.h}
        alt={alt}
        loading={loading}
        sizes={sizes}
        className={className}
        {...rest}
      />
    </picture>
  );
}

export default ResponsiveImage;
