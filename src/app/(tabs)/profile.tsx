import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEventContext, EventItem } from '../../context/EventContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { registeredEvents, leaveEvent } = useEventContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Student Profile</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfoContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80' }}
              style={styles.profileAvatar}
            />
          </View>
          <Text style={styles.profileName}>Ronald Christian Llano</Text>
          <Text style={styles.profileSubtitle}>BS Information Technology • Year 3</Text>
        </View>

        {/* Metrics Section */}
        <View style={styles.metricsContainer}>
          <MetricCard title="Registered" value={registeredEvents.length.toString()} />
          <MetricCard title="Upcoming" value="3" />
          <MetricCard title="Organized" value="1" />
        </View>

        {/* Organizations */}
        <View style={styles.memoriesSection}>
          <Text style={styles.sectionTitle}>My Organizations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.memoriesContent}>
            <OrgItem name="CODES" image={require('../../../assets/images/codes.jpg')} />
            <OrgItem name="SITS" image={require('../../../assets/images/sits.jpg')} />
          </ScrollView>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Registered</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Past</Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic Event List */}
        <View style={styles.eventList}>
          {registeredEvents.length === 0 ? (
            <Text style={styles.emptyText}>You haven't registered for any events yet.</Text>
          ) : (
            registeredEvents.map(event => (
              <CompactEventCard key={event.id} event={event} onUnjoin={() => leaveEvent(event.id)} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function OrgItem({ name, image }: { name: string, image: any }) {
  return (
    <View style={styles.memoryItem}>
      <View style={styles.memoryCircleWrapper}>
        <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.memoryImage} />
      </View>
      <Text style={styles.memoryName}>{name}</Text>
    </View>
  );
}

function MetricCard({ title, value }: { title: string, value: string }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricTitle}>{title}</Text>
    </View>
  );
}

function CompactEventCard({ event, onUnjoin }: { event: EventItem, onUnjoin: () => void }) {
  return (
    <View style={styles.compactEventCard}>
      <Image source={{ uri: event.eventImage }} style={styles.compactEventImage} />
      <View style={styles.compactEventInfo}>
        <Text style={styles.compactEventTitle} numberOfLines={1}>{event.title}</Text>
        <Text style={styles.compactEventDate}>{event.date}</Text>
      </View>
      <TouchableOpacity onPress={onUnjoin} style={styles.unjoinButton}>
        <Ionicons name="close-circle" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 10,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 16,
  },
  profileAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  profileSubtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    marginBottom: 30,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  metricCard: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#208AEF',
  },
  metricTitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    fontWeight: '600',
  },
  memoriesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  memoriesContent: {
    paddingHorizontal: 20,
    gap: 20,
  },
  memoryItem: {
    alignItems: 'center',
    width: 72,
  },
  memoryCircleWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  memoryImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  memoryName: {
    fontSize: 12,
    color: '#555',
    fontWeight: '600',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#208AEF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A0A0A0',
  },
  activeTabText: {
    color: '#FFF',
  },
  eventList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  compactEventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  compactEventImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
  },
  compactEventInfo: {
    flex: 1,
  },
  compactEventTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  compactEventDate: {
    fontSize: 13,
    color: '#208AEF',
    fontWeight: '500',
  },
  unjoinButton: {
    padding: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 14,
  }
});
