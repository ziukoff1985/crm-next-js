import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddPromotionButton from '@/app/components/add-promotion-button';

// export interface PageProps {
//   params: { id: string };
// }

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <Toolbar action={<AddPromotionButton companyId={id} />}>
      <SearchInput />
    </Toolbar>
  );
}
