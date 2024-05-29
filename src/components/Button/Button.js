export function Button() {
  const buttonContent = 'delete Button';
  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        console.log('ich bin der React Button');
      }}>
      {buttonContent}
    </button>
  );
}
