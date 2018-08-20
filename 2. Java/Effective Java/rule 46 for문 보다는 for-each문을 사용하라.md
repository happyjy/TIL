# for문 보다는 for-each문을 사용하라
> 이유 1가지
> 특징 2가지

## 이유
>  NoSuchElementException 발생 방지  
바깥쪽 순환문 안에서 카드 종류별로 한번만 호출되었어야 했는데(4회)  
안쪽 순환문에서 호출되다보니 카드 숫자별로 한 번씩 호출 되는 것(13회)  
아래 코드에서 Comment A 참고(i.next가 j 인자 만큼 호출=>i인자 4개/ j인자 4개)

- NoSuchElementException 방지 방법  
 : 아래 주석 코드가 방법 comment B
```
public class forEachDemo {
	enum Suit {CLUB, DIAMOND, HEART, SPACE}
	enum Rank {ACE, DEUCE, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING}
	public static void main(String[] args) {

		Collection<Suit> suits = Arrays.asList(Suit.values());
		Collection<Rank> ranks = Arrays.asList(Rank.values());

		ArrayList<Card> deck = new ArrayList<Card>();
		for( Iterator<Suit> i = suits.iterator(); i.hasNext(); ) {
//			Suit suits1 = i.next();   // Comment C
			for( Iterator<Rank> j = ranks.iterator(); j.hasNext(); ) {
				System.out.println(i.next() + " : " + j.next());    // Comment A
//				System.out.println(suits1 + " : " + j.next());    // Comment B
			}
		}
	}
} 

```


## 특징(1/2)
> for-each 문으로 컬렉션과 배열뿐 아니라 Iterable 인터페이스를 구현하는 어떤 객체도 순회할 수 잇다.  
모양은 아래 코드와 같다.
```
publick interface Iterable<E>{
  //이 Iterable 안에 있는 원소들에 대한 반복자 반환
  Iterator<E> iterator();
}
```

## 특징(2/2)
> 다음 3가지 상황을 제외하고 for-each문을 사용하자

1. 필터링(filtering)
  - 컬렉션을 순회하다가 특정한 원소를 삭제할 필요가 있다면, 반복자를 명시적으로 사용해야한다.
2. 변환(transforming)
  - 리스트, 배열 순회 중 그 원소를 변경해야할때 리스트반복자, 배열 첨자가 필요.
3. 병렬 순회(paralle iteration)
  - 여러 컬렉션을 병력적으로 순회 해야 하고, 모든 반복자나 첨자 변수가 발맞춰 나아가도록 구현해야 할때 
  - 위 카드 코드 참고(이유 설명 코드)
  